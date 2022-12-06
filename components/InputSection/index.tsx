import { Icon } from '@iconify/react';
import { Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import IconButton from '../IconButton';
import UploadContainer from '../UploadContainer';

const InputSection = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    modalActive
      ? console.log('MODAL ACTIVE')
      : console.log('MODAL DISABLED');
  }, [modalActive]);

  return (
    <>
      <Modal
        open={modalActive}
        onClose={() => setModalActive(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UploadContainer />
      </Modal>

      <div>
        <div className="border-gray-400 border-r-[0.25px] w-[600px] h-[700px]">
          <textarea className="resize-none outline-0 p-2 h-full w-full" />
        </div>

        <div className="flex h-[50px] items-center justify-between px-4 border-gray-400 border-t-[1px] border-r-[0.25px]">
          <div>
            <IconButton
              text="Upload Document"
              iconName="material-symbols:drive-folder-upload-outline"
            />
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
            />
          </div>

          <div className="flex flex-row h-fit px-2 py-1 justify-center items-center rounded-full hover:shadow-md bg-green-600 hover:bg-green-700 hover:cursor-pointer">
            <span className="text-md px-2 font-inter font-bold text-white">
              Outline Document
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputSection;
