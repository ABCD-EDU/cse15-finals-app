import { Icon } from '@iconify/react';
import IconButton from '../IconButton';

const OutputSection = () => {
  return (
    <>
      <div>
        <div className="border-gray-400 border-l-[0.25px] w-[600px] h-[700px]"></div>

        <div className="flex h-[50px] items-center justify-end px-4 border-gray-400 border-t-[1px] border-l-[0.25px]">
          <IconButton
            iconName="material-symbols:content-copy-outline"
            tooltipText="Copy"
          />
          <IconButton
            iconName="uil:export"
            className="ml-2 text-[30px]"
            tooltipText="Export to PDF"
          />
        </div>
      </div>
    </>
  );
};

export default OutputSection;
