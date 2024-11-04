import { HTMLAttributes } from 'react';

export interface IconProps extends HTMLAttributes<SVGElement> {
  size?: number;
  color?: string;
  fill?: string;
}

export const CrewIcon = ({ size = 30, fill = '#FF6E1D', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='5.41406' y='3.08398' width='3.66667' height='23.8333' rx='1.83333' fill={fill} fill-opacity='0.4' />
    <g filter='url(#filter0_b_4844_16706)'>
      <path
        d='M9.17982 19.5846L8.16667 19.5846C7.66041 19.5846 7.25 19.1742 7.25 18.668V5.83464C7.25 5.32838 7.66041 4.91797 8.16667 4.91797H23.9585C24.6723 4.91797 25.1122 5.69773 24.7431 6.30866L21.4392 11.7773C21.2631 12.0688 21.2631 12.4338 21.4392 12.7253L24.7431 18.1939C25.1122 18.8049 24.6723 19.5846 23.9585 19.5846L9.17982 19.5846Z'
        fill={fill}
      />
    </g>
    <defs>
      <filter
        id='filter0_b_4844_16706'
        x='4.5'
        y='2.16797'
        width='23.125'
        height='20.166'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='1.375' />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_4844_16706' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_4844_16706' result='shape' />
      </filter>
    </defs>
  </svg>
);

export const MemberIcon = ({ size = 30, fill = '#5DDBFF', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M20.2839 11.2603C21.5363 10.3 22.344 8.78823 22.344 7.0877C22.344 4.18615 19.9927 1.83398 17.0922 1.83398C14.1918 1.83398 11.8405 4.18615 11.8405 7.0877C11.8405 8.78823 12.6481 10.3 13.9006 11.2603H13.0518C10.933 11.2603 9.09257 13.0182 8.60728 15.5056L8.14685 17.8656C7.47248 21.3221 9.64706 24.6334 12.5914 24.6334H21.597C24.6452 24.6334 26.8375 21.0999 25.9774 17.573L25.4018 15.2131C24.8303 12.8696 23.0469 11.2603 21.0214 11.2603H20.2839Z'
      fill={fill}
      fill-opacity='0.4'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M15.5019 14.0586C16.7548 13.0935 17.5627 11.5738 17.5627 9.86435C17.5627 6.94809 15.2114 4.58398 12.311 4.58398C9.41053 4.58398 7.05924 6.94809 7.05924 9.86435C7.05924 11.5738 7.86716 13.0935 9.12002 14.0586H8.27057C6.15175 14.0586 4.31132 15.8255 3.82603 18.3255L3.3656 20.6974C2.69123 24.1715 4.86581 27.4995 7.81014 27.4995H16.8157C19.864 27.4995 22.0562 23.9481 21.1961 20.4034L20.6206 18.0314C20.0491 15.6761 18.2657 14.0586 16.2402 14.0586H15.5019Z'
      fill={fill}
    />
  </svg>
);

export const ProjectIcon = ({ size = 30, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4.16406 25.6654V6.41536C4.16406 5.40284 4.98488 4.58203 5.9974 4.58203H14.1598C14.6531 4.58203 15.1257 4.78088 15.4706 5.13365L21.9749 11.7858C22.3099 12.1283 22.4974 12.5884 22.4974 13.0675V25.6654C22.4974 26.6779 21.6766 27.4987 20.6641 27.4987H5.9974C4.98487 27.4987 4.16406 26.6779 4.16406 25.6654Z'
      fill='#DA7CD4'
      fill-opacity='0.6'
    />
    <path
      d='M7.83594 22.9173V3.66732C7.83594 2.6548 8.65675 1.83398 9.66927 1.83398H17.8316C18.325 1.83398 18.7976 2.03284 19.1425 2.3856L25.6468 9.03772C25.9817 9.38027 26.1693 9.84034 26.1693 10.3194V22.9173C26.1693 23.9298 25.3485 24.7507 24.3359 24.7507H9.66927C8.65675 24.7507 7.83594 23.9298 7.83594 22.9173Z'
      fill='#FDBBF9'
    />
    <path d='M11.5 15.584H22.5' stroke='#DA7CD4' stroke-width='1.1' stroke-linecap='round' />
    <path d='M11.5 18.334H22.5' stroke='#DA7CD4' stroke-width='1.1' stroke-linecap='round' />
    <path d='M11.5 21.084H17.9167' stroke='#DA7CD4' stroke-width='1.1' stroke-linecap='round' />
  </svg>
);

export const CoffeeChatIcon = ({ size = 30, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path stroke='#4485FF' strokeWidth={1.882} d='M18.36 14.731h5.242a3.898 3.898 0 0 1 0 7.796H18.36' />
    <path fill='#4485FF' d='M2.5 13.118h20.968v3.495c0 5.79-4.694 10.484-10.484 10.484S2.5 22.403 2.5 16.613v-3.495Z' />
    <path
      fill='#253B8C'
      stroke='#4485FF'
      strokeWidth={1.2}
      d='M22.868 13.252c0 .248-.144.572-.604.948-.455.373-1.15.736-2.063 1.051-1.819.63-4.37 1.03-7.217 1.03-2.847 0-5.398-.4-7.217-1.03-.912-.316-1.608-.678-2.063-1.05-.46-.377-.604-.7-.604-.949 0-.248.144-.572.604-.948.455-.373 1.15-.735 2.063-1.051 1.819-.63 4.37-1.03 7.217-1.03 2.847 0 5.398.4 7.217 1.03.912.316 1.608.678 2.063 1.05.46.377.604.701.604.95Z'
    />
    <path
      fill='#4485FF'
      d='M12.584 5.69c0-1.652-1.38-2.443-2.07-2.787 1.416 0 3.596.826 4.14 2.27.696 1.844-.431 2.989-1.852 4.334-1.198 1.135.872 2.958 1.526 3.612-1.962 0-4.032-1.755-4.032-3.509 0-1.857 2.288-1.857 2.288-3.92Z'
    />
  </svg>
);

export const WordchainIcon = ({ size = 30, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M28.3359 14.7064C28.3359 13.2047 28.3359 12.4538 28.0362 11.8802C27.7726 11.3756 27.3519 10.9654 26.8344 10.7083C26.2462 10.416 25.4761 10.416 23.9359 10.416H16.2359C14.6958 10.416 13.9257 10.416 13.3375 10.7083C12.82 10.9654 12.3993 11.3756 12.1357 11.8802C11.8359 12.4538 11.8359 13.2047 11.8359 14.7064V19.5332C11.8359 21.035 11.8359 21.7859 12.1357 22.3595C12.3993 22.864 12.82 23.2743 13.3375 23.5313C13.9257 23.8236 14.6958 23.8236 16.2359 23.8236H18.5425C19.1145 23.8236 19.4006 23.8236 19.6742 23.8784C19.9169 23.9269 20.1518 24.0073 20.3724 24.1172C20.6211 24.2411 20.8445 24.4153 21.2912 24.7638L23.4778 26.4695C23.8592 26.7671 24.0499 26.9158 24.2104 26.916C24.35 26.9162 24.4821 26.8543 24.5691 26.7479C24.6693 26.6256 24.6693 26.3875 24.6693 25.9112V23.8236C25.5217 23.8236 25.948 23.8236 26.2977 23.7322C27.2467 23.4843 27.9879 22.7615 28.2422 21.8361C28.3359 21.4951 28.3359 21.0795 28.3359 20.2483V14.7064Z'
      fill='#FFCA00'
      fill-opacity='0.4'
    />
    <path
      d='M2.67188 8.32589C2.67188 6.49037 2.67188 5.57261 3.05487 4.87153C3.39176 4.25484 3.92932 3.75346 4.5905 3.43925C5.34217 3.08203 6.32615 3.08203 8.29413 3.08203H18.1331C20.101 3.08203 21.085 3.08203 21.8367 3.43925C22.4979 3.75346 23.0354 4.25484 23.3723 4.87153C23.7553 5.57261 23.7553 6.49037 23.7553 8.32589V14.2252C23.7553 16.0608 23.7553 16.9785 23.3723 17.6796C23.0354 18.2963 22.4979 18.7977 21.8367 19.1119C21.085 19.4691 20.101 19.4691 18.1331 19.4691H15.1858C14.4548 19.4691 14.0893 19.4691 13.7398 19.536C13.4296 19.5954 13.1295 19.6936 12.8475 19.8279C12.5298 19.9793 12.2444 20.1923 11.6736 20.6182L8.87949 22.703C8.39213 23.0667 8.14845 23.2485 7.94337 23.2487C7.76501 23.2489 7.59629 23.1732 7.48502 23.0432C7.35708 22.8937 7.35708 22.6027 7.35708 22.0206V19.4691C6.26781 19.4691 5.72317 19.4691 5.27632 19.3574C4.06369 19.0544 3.11653 18.1709 2.79161 17.0399C2.67188 16.6232 2.67188 16.1152 2.67188 15.0992V8.32589Z'
      fill='#FFCA00'
    />
    <circle cx='1.14583' cy='1.14583' r='1.14583' transform='matrix(-1 0 0 1 19.625 10.416)' fill='#CA8C13' />
    <circle cx='1.14583' cy='1.14583' r='1.14583' transform='matrix(-1 0 0 1 14.125 10.416)' fill='#CA8C13' />
    <circle cx='1.14583' cy='1.14583' r='1.14583' transform='matrix(-1 0 0 1 8.625 10.416)' fill='#CA8C13' />
  </svg>
);
