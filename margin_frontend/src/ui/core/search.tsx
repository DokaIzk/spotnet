import { useState, useEffect } from 'react';

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  debounceTime?: number;
  className?: string;
}

export function Search({
  placeholder = 'Search...',
  onSearch,
  debounceTime = 300,
  className = '',
}: SearchProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [query, debounceTime, onSearch]);

  return (
    <div className="p-2 border rounded-md border:ring-baseWhite flex items-center w-full">
      <button className="pl-4 pr-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5306 18.4694L14.8365 13.7763C16.1971 12.1429 16.8755 10.0478 16.7307 7.92694C16.5859 5.80607 15.629 3.82268 14.0591 2.38935C12.4892 0.95602 10.4271 0.183113 8.30188 0.231413C6.17663 0.279713 4.15181 1.1455 2.64864 2.64867C1.14547 4.15184 0.279683 6.17666 0.231383 8.30191C0.183083 10.4272 0.955989 12.4892 2.38932 14.0591C3.82265 15.629 5.80604 16.5859 7.92691 16.7307C10.0478 16.8755 12.1428 16.1971 13.7762 14.8366L18.4693 19.5306C18.539 19.6003 18.6218 19.6556 18.7128 19.6933C18.8038 19.731 18.9014 19.7504 19 19.7504C19.0985 19.7504 19.1961 19.731 19.2871 19.6933C19.3782 19.6556 19.4609 19.6003 19.5306 19.5306C19.6003 19.4609 19.6556 19.3782 19.6933 19.2872C19.731 19.1961 19.7504 19.0985 19.7504 19C19.7504 18.9015 19.731 18.8039 19.6933 18.7128C19.6556 18.6218 19.6003 18.5391 19.5306 18.4694ZM1.74997 8.5C1.74997 7.16498 2.14585 5.85993 2.88755 4.7499C3.62925 3.63987 4.68346 2.77471 5.91686 2.26381C7.15026 1.75292 8.50746 1.61925 9.81683 1.8797C11.1262 2.14015 12.3289 2.78303 13.2729 3.72703C14.2169 4.67103 14.8598 5.87377 15.1203 7.18314C15.3807 8.49251 15.2471 9.84971 14.7362 11.0831C14.2253 12.3165 13.3601 13.3707 12.2501 14.1124C11.14 14.8541 9.83499 15.25 8.49997 15.25C6.71037 15.248 4.99463 14.5362 3.72919 13.2708C2.46375 12.0053 1.75196 10.2896 1.74997 8.5Z"
            fill="#4E4E4E"
          />
        </svg>
      </button>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder={placeholder}
        className={`w-full p-2 focus:ring-transparent right-0 focus:outline-none border-0 border-transparent placeholder:font-light  ${className}`}
      />
    </div>
  );
}
