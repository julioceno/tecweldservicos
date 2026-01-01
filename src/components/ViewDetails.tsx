import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

interface ViewDetailsProps {
  label?: string;
}

const ViewDetails: React.FC<ViewDetailsProps> = ({ label = 'Ver detalhes' }) => (
  <div className="inline-flex items-center font-medium text-sm font-urbanist text-gray-900 group-hover:text-main transition-colors group">
    <span>
      {label}
    </span>
    <FiChevronRight className="ml-1 text-lg transition-transform group-hover:translate-x-1" />
  </div>
);

export default ViewDetails;
