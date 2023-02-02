import styled from '@emotion/styled';
import * as Dialog from '@radix-ui/react-dialog';
import dynamic from 'next/dynamic';
import { FC, ReactNode, useState } from 'react';

import { DEFAULT_PROFILE_IMAGE_MOBILE_SVG, RIGHT_ARROW_SVG } from '@/components/common/Header/imageData';
import { LinkRenderer, PathMatcher } from '@/components/common/Header/types';
import ResizedImage from '@/components/common/ResizedImage';
import { FEEDBACK_FORM_URL, playgroundLink } from '@/constants/links';
import { colors } from '@/styles/colors';
import { textStyles } from '@/styles/typography';

const DialogPortal = dynamic<Dialog.DialogPortalProps>(
  () => import('@radix-ui/react-dialog').then((r) => r.DialogPortal),
  {
    ssr: false,
  },
);

interface MobileSideBarProps {
  children: ReactNode;
  name: string;
  myProfileHref?: string;
  profileImage?: string;
  onLogout?: () => void;
  renderLink: LinkRenderer;
  activePathMatcher: PathMatcher;
}

const MobileSideBar: FC<MobileSideBarProps> = ({
  children,
  myProfileHref = '#',
  onLogout,
  name,
  profileImage,
  renderLink,
  activePathMatcher,
}) => {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <DialogPortal>
        <Dialog.Overlay asChild>
          <Overlay />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <Content>
            <ProfileLinkSlot onClick={() => setOpen(false)}>
              {renderLink({
                href: myProfileHref,
                children: (
                  <ProfileButton>
                    <ProfileImageSlot>
                      {profileImage ? (
                        <ResizedImage src={profileImage} width={32} alt='' />
                      ) : (
                        DEFAULT_PROFILE_IMAGE_MOBILE_SVG
                      )}
                    </ProfileImageSlot>
                    <ProfileNameSlot>{name}</ProfileNameSlot>
                    <ProfileArrowSlot>{RIGHT_ARROW_SVG}</ProfileArrowSlot>
                  </ProfileButton>
                ),
              })}
            </ProfileLinkSlot>

            {renderLink({
              href: playgroundLink.memberList(),
              children: (
                <NavItem isActive={activePathMatcher(playgroundLink.memberList())} onClick={close}>
                  멤버
                </NavItem>
              ),
            })}
            {renderLink({
              href: playgroundLink.projectList(),
              children: (
                <NavItem isActive={activePathMatcher(playgroundLink.projectList())} onClick={close}>
                  프로젝트
                </NavItem>
              ),
            })}
            {renderLink({
              href: playgroundLink.groupList(),
              children: (
                <NavItem isActive={activePathMatcher(playgroundLink.groupList())} onClick={close}>
                  모임
                </NavItem>
              ),
            })}
            <Divider />
            {renderLink({
              href: playgroundLink.makers(),
              children: (
                <NavLinkSmall isActive={activePathMatcher(playgroundLink.makers())} onClick={close}>
                  만든 사람들
                </NavLinkSmall>
              ),
            })}
            <a href={FEEDBACK_FORM_URL} target='_blank' rel='noreferrer'>
              <NavLinkSmall onClick={close}>의견 제안하기</NavLinkSmall>
            </a>
            <NavLinkSmall
              onClick={() => {
                onLogout?.();
                close();
              }}
            >
              로그아웃
            </NavLinkSmall>
          </Content>
        </Dialog.Content>
      </DialogPortal>
    </Dialog.Root>
  );
};

export default MobileSideBar;

const Overlay = styled.div`
  position: fixed;
  background-color: rgb(0 0 0 / 70%);
  animation: overlay-show 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  inset: 0;

  @keyframes overlay-show {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  --x-gap: 20px;

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  z-index: 100001;
  background-color: ${colors.black80};
  width: 212px;
  height: 100vh;
  overflow-y: auto;
  animation: content-show 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  color: ${colors.white};

  @keyframes content-show {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }
`;

const ProfileLinkSlot = styled.div`
  margin-top: 45px;
  margin-bottom: 26px;
`;

const ProfileButton = styled.div`
  display: flex;
  padding: 10px var(--x-gap);
`;

const ProfileImageSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background-color: ${colors.black60};
  width: 42px;
  height: 42px;
  overflow: hidden;
`;

const ProfileNameSlot = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin-left: 12px;
  line-height: 20px;

  ${textStyles.SUIT_20_B};
`;

const ProfileArrowSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
`;

const NavItem = styled('div')<{
  isActive?: boolean;
}>`
  padding: 10px var(--x-gap);
  color: ${(props) => (props.isActive ? colors.white : colors.gray30)};

  ${textStyles.SUIT_18_M};
`;

const NavLinkSmall = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  padding: 8px var(--x-gap);
  color: ${(props) => (props.isActive ? colors.white : colors.gray30)};

  ${textStyles.SUIT_14_M};
`;

const Divider = styled.div`
  margin: 26px var(--x-gap);
  border-top: 1px solid ${colors.black60};
  color: ${colors.black60};
`;
