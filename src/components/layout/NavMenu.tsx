import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NavigationItem } from '../../types';

interface NavMenuProps {
  items: NavigationItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        
        return (
          <div
            key={item.title}
            className="relative group"
            onMouseEnter={() => hasChildren && handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            {item.path ? (
              <Link
                to={item.path}
                className="nav-link flex items-center py-2"
              >
                {item.title}
                {hasChildren && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
            ) : (
              <button className="nav-link flex items-center py-2">
                {item.title}
                {hasChildren && <ChevronDown className="ml-1 h-4 w-4" />}
              </button>
            )}

            {/* Dropdown menu */}
            {hasChildren && activeDropdown === item.title && (
              <div className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 z-20">
                {item.children!.map((child) => {
                  const hasGrandchildren = child.children && child.children.length > 0;
                  
                  return (
                    <div key={child.title} className="relative group/child">
                      <div className="px-4 py-2 hover:bg-gray-50">
                        {child.path ? (
                          <Link
                            to={child.path}
                            className="block w-full text-left text-gray-800 hover:text-blue-600"
                          >
                            {child.title}
                          </Link>
                        ) : (
                          <span className="block w-full text-left text-gray-800 font-medium">
                            {child.title}
                          </span>
                        )}
                      </div>

                      {/* Third level dropdown */}
                      {hasGrandchildren && (
                        <div className="hidden group-hover/child:block absolute left-full top-0 w-64 bg-white rounded-md shadow-lg py-2">
                          {child.children!.map((grandchild) => (
                            <div key={grandchild.title} className="px-4 py-2 hover:bg-gray-50">
                              <Link
                                to={grandchild.path || '#'}
                                className="block w-full text-left text-gray-800 hover:text-blue-600"
                              >
                                {grandchild.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default NavMenu;