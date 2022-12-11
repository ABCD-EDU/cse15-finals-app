import { Icon } from '@iconify/react';
import { Tooltip } from '@mui/material';
import { DOMAttributes, FC, MouseEventHandler } from 'react';

interface IBProps {
  text?: string;
  iconName: string;
  className?: string;
  tooltipText?: string;
  click?: MouseEventHandler<HTMLDivElement> | undefined;
}

const IconButton: FC<IBProps> = ({
  text,
  iconName,
  className,
  tooltipText,
  click,
}: IBProps) => {
  return (
    <Tooltip title={tooltipText}>
      <div
        onClick={click}
        className={`flex flex-row h-fit px-4 py-1 justify-center items-center rounded-full hover:shadow-md hover:bg-gray-100 hover:cursor-pointer border-[1px] border-gray-200 ${className}`}
      >
        <Icon icon={iconName} className="text-[25px]" />
        {text ? (
          <span className="text-sm pl-2 font-inter font-bold">
            {text}
          </span>
        ) : null}
      </div>
    </Tooltip>
  );
};

export default IconButton;
