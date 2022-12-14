interface IRootLayout {
  children: React.ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  return (
    <div style={{ maxWidth: '100vw', width: '100%', overflow: 'hidden', minHeight: '100%', position: 'absolute', inset: '0' }}>
      {children}
    </div>
  )
}

export default RootLayout
