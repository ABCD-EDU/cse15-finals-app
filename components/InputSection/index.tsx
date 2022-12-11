import { Modal, Tooltip } from '@mui/material';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import IconButton from '../IconButton';
import UploadContainer from '../UploadContainer';

const InputSection = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState<string>(
    'No file selected...'
  );
  const [pdfText, setPDFText] = useState<string>('');

  useEffect(() => {
    modalActive
      ? console.log('MODAL ACTIVE')
      : console.log('MODAL DISABLED');
  }, [modalActive]);

  useEffect(() => {
    console.log(pdfText);
  }, [pdfText]);

  const tryParse = async (fileObj) => {
    if (fileObj !== null) {
      const formData = new FormData();

      formData.append('pdfFile', fileObj);

      axios({
        method: 'post',
        url: 'http://localhost:8080/extract-text',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((res) => {
          return res.data;
        })
        .then((extractedText) => {
          setPDFText(extractedText.trim());
        });
    }
  };

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
    setFileName(fileObj.name);
    tryParse(fileObj);
  };

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
          <textarea className="resize-none outline-0 focus:outline-none p-2 h-full w-full" />
        </div>

        <div className="flex h-[50px] items-center justify-between px-4 border-gray-400 border-t-[1px] border-r-[0.25px]">
          <div className="flex flex-row items-center">
            <IconButton
              text="Upload Document"
              iconName="material-symbols:drive-folder-upload-outline"
              className="border-gray-200"
              click={handleClick}
            />
            <input
              style={{ display: 'none' }}
              // accept="application/pdf"
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
            />
            <Tooltip title={fileName}>
              <span className="pl-4 text-sm text-gray-400">
                {fileName.length > 20
                  ? fileName.slice(0, 11) + '...'
                  : fileName}
              </span>
            </Tooltip>
          </div>

          <div className="flex flex-row h-fit px-2 py-1 justify-center items-center rounded-full hover:shadow-md bg-green-600 hover:bg-green-700 hover:cursor-pointer">
            <span className="text-sm px-2 py-1 font-inter font-bold text-white">
              Outline Document
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputSection;
