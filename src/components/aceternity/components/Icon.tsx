import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

const Icon = ({ iconName, className }: { iconName: string, className: string | "" }) => {
  const [IconComponent, setIconComponent] = useState<IconType | null>(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const iconModule = await import('react-icons/si');
        const { default: _, ...icons } = iconModule;
        setIconComponent(() => icons[iconName as keyof typeof icons] as IconType);
      } catch (error) {
        console.error(`Icon "${iconName}" not found`, error);
      }
    };

    importIcon();
  }, [iconName]);

  if (!IconComponent) {
    return null; // or a fallback icon or loading spinner
  }

  return <IconComponent className={className} />;
};

export default Icon;
