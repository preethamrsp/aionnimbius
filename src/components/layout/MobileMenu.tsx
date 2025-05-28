import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavigationItem } from '../../types';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavigationItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, items }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  if (!isOpen) return null;

  const renderMenuItem = (item: NavigationItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.title] || false;
    
    return (
      <div key={item.title} className={`${depth > 0 ? 'ml-4' : ''}`}>
        <div className="flex justify-between items-center py-3">
          {item.path ? (
            <Link
              to={item.path}
              className={`text-gray-800 ${depth === 0 ? 'font-medium' : ''} hover:text-blue-600 transition-colors`}
            >
              {item.title}
            </Link>
          ) : (
            <span className={`text-gray-800 ${depth === 0 ? 'font-medium' : ''}`}>
              {item.title}
            </span>
          )}
          
          {hasChildren && (
            <button
              onClick={() => toggleItem(item.title)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              {isExpanded ? (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              )}
            </button>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="border-l-2 border-gray-200 pl-4 my-1">
            {item.children!.map((child) => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="lg:hidden bg-white border-t shadow-lg">
      <div className="container-custom py-4">
        <div className="space-y-2">
          {items.map((item) => renderMenuItem(item))}
        </div>
        
        <div className="mt-6">
          <Link
            to="/contact"
            className="btn btn-primary w-full text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;