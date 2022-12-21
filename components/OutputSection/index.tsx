import IconButton from "../IconButton";
import Taggy from "react-taggy";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";

const OutputSection = () => {
  const [textCards, setTextCards] = useState<
    {
      orig_sentence: string;
      text: string[];
      term: string;
      definition: string;
      span: {}[];

      // term_start_idx: number;
      // // // term_end_idx: number;
      // // def_start_idx: number;
      // def_end_idx: number;
    }[]
  >();

  // TESTER
  useEffect(() => {
    setTextCards([
      {
        orig_sentence:
          "Vesicles and vacuoles are membrane - bound sacs that function in storage and transport.",
        sentence: [
          "vesicles",
          "and",
          "vacuoles",
          "are",
          "membrane",
          "-",
          "bound",
          "sacs",
          "that",
          "function",
          "in",
          "storage",
          "and",
          "transport",
          ".",
        ],
        span: [
          {
            start: 0,
            end: 8,
            type: "term",
          },
          {
            start: 9,
            end: 12,
            type: "term",
          },
          {
            start: 13,
            end: 21,
            type: "definition",
          },
          {
            start: 22,
            end: 25,
            type: "definition",
          },
          {
            start: 26,
            end: 34,
            type: "definition",
          },
          {
            start: 35,
            end: 36,
            type: "definition",
          },
          {
            start: 37,
            end: 42,
            type: "definition",
          },
          {
            start: 43,
            end: 47,
            type: "definition",
          },
          {
            start: 48,
            end: 52,
            type: "definition",
          },
          {
            start: 53,
            end: 61,
            type: "definition",
          },
          {
            start: 62,
            end: 64,
            type: "definition",
          },
          {
            start: 65,
            end: 72,
            type: "definition",
          },
        ],
        term: "vesicles and",
        definition:
          "vacuoles are membrane - bound sacs that function in storage and transport .",
      },
      {
        orig_sentence:
          "A prokaryote is a simple , mostly single - celled ( unicellular ) organism that lacks a nucleus , or any other membrane - bound organelle.",
        sentence: [
          "a",
          "prokaryote",
          "is",
          "a",
          "simple",
          ",",
          "mostly",
          "single",
          "-",
          "celled",
          "(",
          "unicellular",
          ")",
          "organism",
          "that",
          "lacks",
          "a",
          "nucleus",
          ",",
          "or",
          "any",
          "other",
          "membrane",
          "-",
          "bound",
          "organelle",
          ".",
        ],
        span: [
          {
            start: 0,
            end: 1,
            type: "term",
          },
          {
            start: 2,
            end: 12,
            type: "term",
          },
          {
            start: 13,
            end: 15,
            type: "definition",
          },
          {
            start: 16,
            end: 17,
            type: "definition",
          },
          {
            start: 18,
            end: 24,
            type: "definition",
          },
          {
            start: 25,
            end: 26,
            type: "definition",
          },
          {
            start: 27,
            end: 33,
            type: "definition",
          },
          {
            start: 34,
            end: 40,
            type: "definition",
          },
          {
            start: 41,
            end: 42,
            type: "definition",
          },
          {
            start: 43,
            end: 49,
            type: "definition",
          },
          {
            start: 50,
            end: 51,
            type: "definition",
          },
          {
            start: 52,
            end: 63,
            type: "definition",
          },
          {
            start: 64,
            end: 65,
            type: "definition",
          },
          {
            start: 66,
            end: 74,
            type: "definition",
          },
          {
            start: 75,
            end: 79,
            type: "definition",
          },
          {
            start: 80,
            end: 85,
            type: "definition",
          },
          {
            start: 86,
            end: 87,
            type: "definition",
          },
          {
            start: 88,
            end: 95,
            type: "definition",
          },
          {
            start: 96,
            end: 97,
            type: "definition",
          },
          {
            start: 98,
            end: 100,
            type: "definition",
          },
          {
            start: 101,
            end: 104,
            type: "definition",
          },
          {
            start: 105,
            end: 110,
            type: "definition",
          },
          {
            start: 120,
            end: 121,
            type: "definition",
          },
        ],
        term: "a prokaryote",
        definition:
          "is a simple , mostly single - celled ( unicellular ) organism that lacks a nucleus , or any other membrane - bound organelle .",
      },
      {
        orig_sentence:
          "Phototrophs ( or phototrophic organisms ) obtain their energy from sunlight",
        sentence: [
          "phototrophs",
          "(",
          "or",
          "phototrophic",
          "organisms",
          ")",
          "obtain",
          "their",
          "energy",
          "from",
          "sunlight",
        ],
        span: [
          {
            start: 0,
            end: 11,
            type: "term",
          },
          {
            start: 12,
            end: 13,
            type: "definition",
          },
          {
            start: 14,
            end: 16,
            type: "definition",
          },
          {
            start: 17,
            end: 29,
            type: "definition",
          },
          {
            start: 30,
            end: 39,
            type: "definition",
          },
          {
            start: 40,
            end: 41,
            type: "definition",
          },
          {
            start: 42,
            end: 48,
            type: "definition",
          },
        ],
        term: "phototrophs",
        definition:
          "( or phototrophic organisms ) obtain their energy from sunlight",
      },
      {
        orig_sentence:
          "Chemotrophs ( or chemosynthetic organisms ) obtain their energy from chemical compounds",
        sentence: [
          "chemotrophs",
          "(",
          "or",
          "chemosynthetic",
          "organisms",
          ")",
          "obtain",
          "their",
          "energy",
          "from",
          "chemical",
          "compounds",
        ],
        span: [
          {
            start: 0,
            end: 11,
            type: "term",
          },
          {
            start: 12,
            end: 13,
            type: "definition",
          },
          {
            start: 14,
            end: 16,
            type: "definition",
          },
          {
            start: 17,
            end: 31,
            type: "definition",
          },
          {
            start: 32,
            end: 41,
            type: "definition",
          },
          {
            start: 42,
            end: 43,
            type: "definition",
          },
          {
            start: 44,
            end: 50,
            type: "definition",
          },
          {
            start: 51,
            end: 56,
            type: "definition",
          },
          {
            start: 57,
            end: 63,
            type: "definition",
          },
          {
            start: 64,
            end: 68,
            type: "definition",
          },
          {
            start: 69,
            end: 77,
            type: "definition",
          },
          {
            start: 78,
            end: 87,
            type: "definition",
          },
        ],
        term: "chemotrophs",
        definition:
          "( or chemosynthetic organisms ) obtain their energy from chemical compounds",
      },
    ]);
    // setTextCards(localStorage.getItem("extractedText"));
  }, [textCards]);

  const removeItem = (index: number) => {
    const temp = [...textCards];
    temp.splice(index, 1);
    setTextCards(temp);
  };

  const jsonFormatter = (jsonData) => {
    var text = "";

    jsonData.map((item) => {
      console.log("jioajweoifjaweiofjaweiof");
      text += item["term"] + " - " + item["definition"] + "\n";
    });

    console.log("wowowowowo:", text);

    return text;
  };

  const handleExport = () => {
    let markdown = jsonFormatter(textCards);
    console.log(`textcards: ${JSON.stringify(textCards)}`);
    console.log(`markdown: ${markdown}`);

    // Convert the Markdown string to a Blob object
    const markdownBlob = new Blob([markdown], {
      type: "text/markdown;charset=utf-8",
    });

    // Prompt the user to save the file
    saveAs(markdownBlob, "my-markdown-file.md");
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
                        text={item["orig_sentence"]}
                        spans={item["span"]}
                        ents={[
                          {
                            type: "term",
                            color: { r: 166, g: 226, b: 45 },
                          },
                          {
                            type: "definition",
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
                          {item["term"]}
                        </span>{" "}
                        -{" "}
                        <span className="border-[1px] border-[#43C6FC] bg-[#43C6FC]/[0.2] px-[0.25em] rounded-[0.25em]">
                          {item["definition"]}
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
