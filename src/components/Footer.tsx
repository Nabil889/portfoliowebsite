const Footer = () => {
  return (
    <footer
      className="py-8 mt-auto"
      style={{
        background: 'rgba(255, 255, 255, 0.28)',
        backdropFilter: 'blur(24px) saturate(160%)',
        WebkitBackdropFilter: 'blur(24px) saturate(160%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 -4px 24px rgba(59, 130, 246, 0.04)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm" style={{ color: 'rgba(30,58,95,0.45)' }}>
          © 2026 Nabil Aouni. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;