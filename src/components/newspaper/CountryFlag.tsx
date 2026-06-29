import Image from 'next/image';

interface CountryFlagProps {
  countryName: string;
  className?: string;
  width?: number;
  height?: number;
}

export function CountryFlag({ countryName, className = "", width = 24, height = 16 }: CountryFlagProps) {
  // Convert country name to slug for matching svg files (e.g. "United States" -> "united-states.svg")
  // For unsupported countries, it will just show a subtle fallback or blank space.
  const slug = countryName.toLowerCase().replace(/\s+/g, '-');
  
  // List of countries we actually have SVGs for, to avoid broken image links
  const supportedFlags = [
    "india", "united-states", "china", "japan", "united-kingdom", "germany", "france"
  ];
  
  if (!supportedFlags.includes(slug)) {
    return <svg className={`bg-border ${className}`} width={width} height={height} />;
  }

  return (
    <div className={`relative overflow-hidden border border-border inline-block leading-none ${className}`}>
      <Image
        src={`/flags/${slug}.svg`}
        alt={`${countryName} flag`}
        width={width}
        height={height}
        className="object-cover"
      />
    </div>
  );
}
