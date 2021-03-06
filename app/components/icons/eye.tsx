interface Props {
  off?: boolean
}

const Eye = ({off}: Props) => {
  if (off) {
    return (
      <svg
        className="icons eye-off themed-stroke"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <line
          x1="201.15"
          x2="223.96"
          y1="127.305"
          y2="166.813"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        />
        <line
          x1="154.182"
          x2="161.296"
          y1="149.263"
          y2="189.607"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        />
        <line
          x1="101.73"
          x2="94.615"
          y1="149.244"
          y2="189.594"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        />
        <line
          x1="54.809"
          x2="31.889"
          y1="127.272"
          y2="166.971"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          d="M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468"
        />
      </svg>
    )
  }

  return (
    <svg
      className="icons eye themed"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <path d="M447.1 256.2C401.8 204 339.2 144 256 144c-33.6 0-64.4 9.5-96.9 29.8C131.7 191 103.6 215.2 65 255l-1 1 6.7 6.9C125.8 319.3 173.4 368 256 368c36.5 0 71.9-11.9 108.2-36.4 30.9-20.9 57.2-47.4 78.3-68.8l5.5-5.5-.9-1.1zM256 160c33.1 0 64.9 9.5 97.2 30.6 23.9 15.6 47.4 36.7 73.7 66.1C388.6 295.4 331.1 352 256 352c-34.2 0-64.2-8.4-94.2-28.2-27.5-18.1-52.3-43.3-76.2-67.8 59.1-59.7 108.4-96 170.4-96z" />
      <path d="M256 336c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm0-143.7c35.2 0 64 28.6 64 63.7s-28.8 63.7-64 63.7-63.9-28.6-63.9-63.7 28.7-63.7 63.9-63.7z" />
      <path d="M288 256c0 17.5-14.4 32-31.8 32S224 272.8 224 255.3s15.8-31.3 32-31.3v-16c-26.5 0-47.9 21.6-47.9 48.2s21.5 48.1 47.9 48.1 48-21.6 48-48.1v-.2h-16z" />
    </svg>
  )
}

export {Eye}
