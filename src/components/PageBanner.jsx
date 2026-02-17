const PageBanner = ({ title, description }) => {
  return (
    <div className="bg-primary pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="section-container text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        {description && (
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
