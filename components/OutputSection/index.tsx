import IconButton from '../IconButton';
import Taggy from 'react-taggy';
import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

const OutputSection = () => {
  const [textCards, setTextCards] = useState<
    {
      orig_sentence: string;
      term: string;
      definition: string;
      term_start_idx: number;
      term_end_idx: number;
      def_start_idx: number;
      def_end_idx: number;
    }[]
  >();

  // TESTER
  useEffect(() => {
    setTextCards([
      {
        orig_sentence: 'The quick brown fox jumps over the lazy dog.',
        term: 'fox',
        definition:
          'a small carnivorous mammal with a pointed snout and ears, a long bushy tail, and fur of a reddish-brown color.',
        term_start_idx: 16,
        term_end_idx: 19,
        def_start_idx: 0,
        def_end_idx: 15,
      },
      {
        orig_sentence: 'The quick brown fox jumps over the lazy dog.',
        term: 'fox',
        definition:
          'a small carnivorous mammal with a pointed snout and ears, a long bushy tail, and fur of a reddish-brown color.',
        term_start_idx: 16,
        term_end_idx: 19,
        def_start_idx: 0,
        def_end_idx: 15,
      },
      {
        orig_sentence: 'The quick brown fox jumps over the lazy dog.',
        term: 'fox',
        definition:
          'a small carnivorous mammal with a pointed snout and ears, a long bushy tail, and fur of a reddish-brown color.',
        term_start_idx: 16,
        term_end_idx: 19,
        def_start_idx: 0,
        def_end_idx: 15,
      },
      {
        orig_sentence: 'The quick brown fox jumps over the lazy dog.',
        term: 'fox',
        definition:
          'a small carnivorous mammal with a pointed snout and ears, a long bushy tail, and fur of a reddish-brown color.',
        term_start_idx: 16,
        term_end_idx: 19,
        def_start_idx: 0,
        def_end_idx: 15,
      },
    ]);
  }, []);

  const removeItem = (index: number) => {
    const temp = [...textCards];
    temp.splice(index, 1);
    setTextCards(temp);
  };

  const jsonFormatter = (jsonData) => {
    var text = '';

    jsonData.map((item) => {
      console.log('jioajweoifjaweiofjaweiof');
      text += item['term'] + ' - ' + item['definition'] + '\n';
    });

    console.log('wowowowowo:', text);

    return text;
  };

  const handleExport = () => {
    let markdown = jsonFormatter(textCards);
    console.log(`textcards: ${JSON.stringify(textCards)}`);
    console.log(`markdown: ${markdown}`);

    // Convert the Markdown string to a Blob object
    const markdownBlob = new Blob([markdown], {
      type: 'text/markdown;charset=utf-8',
    });

    // Prompt the user to save the file
    saveAs(markdownBlob, 'my-markdown-file.md');
  };

  const copyToClipboard = (jsonData) => {
    let markdown = jsonFormatter(jsonData);
    navigator.clipboard.writeText(markdown);
  };

  return (
    <>
      <div className="border-gray-400 border-l-[0.25px]">
        <div className="p-5 w-[600px] h-[700px] overflow-scroll">
          {textCards
            ? textCards.map((item, index) => (
                <>
                  <div className="flex flex-col items-center mx-5 bg-gray-100 pt-4 px-4 rounded-md mb-4">
                    {/* ORIGINAL SECTION */}
                    <span className="mb-2">Original Text</span>
                    <div className="bg-gray-50 rounded-lg p-5 shadow-sm w-full">
                      <Taggy
                        text={item['orig_sentence']}
                        spans={[
                          {
                            start: item['def_start_idx'],
                            end: item['def_end_idx'],
                            type: 'definition',
                          },
                          {
                            start: item['term_start_idx'],
                            end: item['term_end_idx'],
                            type: 'term',
                          },
                        ]}
                        ents={[
                          {
                            type: 'term',
                            color: { r: 166, g: 226, b: 45 },
                          },
                          {
                            type: 'definition',
                            color: { r: 67, g: 198, b: 252 },
                          },
                        ]}
                      />
                    </div>

                    {/* PROCESSED SECTION */}
                    <span className="mb-2 mt-5">Processed Text</span>
                    <div className="bg-gray-50 rounded-lg p-5 shadow-sm w-full">
                      <p>
                        <span className="border-[1px] border-[#A6E22D] bg-[#A6E22D]/[0.2] px-[0.25em] rounded-[0.25em]">
                          {item['term']}
                        </span>{' '}
                        -{' '}
                        <span className="border-[1px] border-[#43C6FC] bg-[#43C6FC]/[0.2] px-[0.25em] rounded-[0.25em]">
                          {item['definition']}
                        </span>
                      </p>
                    </div>

                    {/* BUTTONS SECTION */}
                    <div className="p-2 flex flex-row justify-end w-full">
                      <IconButton
                        tooltipText="Delete"
                        className="bg-white hover:bg-white px-2"
                        iconName="material-symbols:delete-outline"
                        click={() => removeItem(index)}
                      />

                      <IconButton
                        iconName="material-symbols:content-copy-outline"
                        className="bg-white hover:bg-white ml-2 px-2"
                        tooltipText="Copy"
                        click={() => copyToClipboard([item])}
                      />
                    </div>
                  </div>
                </>
              ))
            : null}
        </div>

        <div className="flex min-h-[50px] items-center justify-end px-4 border-gray-400 border-t-[1px]">
          <IconButton
            iconName="material-symbols:content-copy-outline"
            tooltipText="Copy"
            click={() => copyToClipboard(textCards)}
          />
          <IconButton
            iconName="uil:export"
            className="ml-2 text-[30px]"
            tooltipText="Export to PDF"
            click={handleExport}
          />
        </div>
      </div>
    </>
  );
};

export default OutputSection;
