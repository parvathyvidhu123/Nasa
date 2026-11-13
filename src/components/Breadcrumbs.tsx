import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    path?: string;
  }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-space-muted mb-6 overflow-x-auto py-1">
      <Link to="/" className="flex items-center gap-1 hover:text-space-accent transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>HOME</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3 h-3 text-space-border" />
          {item.path ? (
            <Link to={item.path} className="hover:text-space-accent transition-colors uppercase">
              {item.label}
            </Link>
          ) : (
            <span className="text-space-accent font-medium uppercase truncate max-w-[200px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

