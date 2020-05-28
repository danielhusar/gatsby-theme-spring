import React, { useState } from 'react'
import styled from './styled'
import blur from '../img/blur.png'

interface State {
  render: boolean
}

interface Props {
  children: React.ReactNode | undefined
  disableOverlay?: boolean
}

const Disclaimer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 15px;
  overflow: hidden;
  font-size: 20px;
  color: white;

  .background {
    background-image: url(${blur});
    background-size: cover;
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    filter: blur(20px);
  }

  .content {
    position: relative;
  }

  @media (max-width: 800px) {
    font-size: 16px;
  }
`

const Button = styled.button`
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  border: 1px solid white;
  color: white;
  font-size: 18px;
  padding: 0.4em 1.2em;
  border-radius: 2px;
  position: relative;
  text-decoration: none;
  line-height: 1.5;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0);
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 20px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 800px) {
    padding: 0.2em 1em;
    font-size: 15px;
    margin-top: 10px;
  }
`

export default function Overlay({ children, disableOverlay }: Props) {
  const [acknowledge, setAcknowledge] = useState(
    (typeof window !== 'undefined' && window.navigator && window.navigator.doNotTrack !== '1') || disableOverlay,
  )

  const handleClick = () => {
    setAcknowledge(true)
  }

  return acknowledge ? (
    <>{children}</>
  ) : (
    <Disclaimer className="disclaimer">
      <div className="background" />
      <div className="content">
        <div>Third party embeds might not respect do not track policy.</div>
        <Button onClick={handleClick}>Click here to load</Button>
      </div>
    </Disclaimer>
  )
}
