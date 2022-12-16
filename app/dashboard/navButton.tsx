'use client'

interface IDashboardLayout {
  children: React.ReactNode
}

export const NavButton: React.FC<IDashboardLayout> = ({ children }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.currentTarget.classList.toggle('rotate')
    e.currentTarget.nextElementSibling?.classList.toggle('show_nav')
  }

  return (
    <>
      <div onClick={handleClick}>
        <div className='icon' />
      </div>
      <nav>
        {children}
      </nav>
      <style jsx>
        {`
        .icon {
          width: 2rem;
          height: 2rem;
          position: relative;
          transition: transform 300ms ease;
        }
        .icon::after,
        .icon::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background: var(--white);
          top: 30%;
          left: 0;
          transform: translateY(-30%);
          transition: transform 300ms ease;
          border-radius: var(--team-border-radius);
        }
        .icon::after {
          top: 70%;
          transform: translateY(-70%);
        }
        .rotate>.icon::after,
        .rotate>.icon::before {
          top: 50%;
          transform: translateY(-50%);
        }
        .rotate>.icon {
          transform: rotate(45deg);
        }
        .rotate>.icon::before {
          transform: rotate(90deg);
        }
        nav {
          position: absolute;
          top: 3.5rem;
          right: 0;
          height: 100vh;
          backdrop-filter: saturate(180%) blur(.5rem);
          background-color: var(--black400-40);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
          opacity: 0;
          transition: opacity 300ms ease;
          pointer-events: none;
          user-select: none;
        }
        .show_nav {
          opacity: 1;
          pointer-events: inherit;
        }
        `}
      </style>
    </>
  )
}
