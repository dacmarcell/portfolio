import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ScreeshotBoxProps {
  error: string;
  isLoading: boolean;
  siteScreenshot: string | null;
  isSiteScreenshotBoxOpen: boolean;
  setIsSiteScreenshotBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ScreenshotBox({
  isLoading,
  siteScreenshot,
  isSiteScreenshotBoxOpen,
  setIsSiteScreenshotBoxOpen,
}: ScreeshotBoxProps) {
  return (
    <div className="absolute left-0 top-12 w-80 p-4 bg-white border rounded shadow-lg">
      <div className="flex justify-end items-center mb-4">
        <p className="text-slate-500 text-center text-xs mr-2">
          Preview do site que você irá acessar
        </p>
        <IoMdClose
          className="top-2 text-2xl cursor-pointer text-black left-40"
          onClick={() => {
            if (isSiteScreenshotBoxOpen) {
              setIsSiteScreenshotBoxOpen(false);
            }
          }}
        />
      </div>
      {isLoading ? (
        <p className="text-center text-sm text-gray-400">Carregando...</p>
      ) : siteScreenshot ? (
        <p className="text-center text-sm text-gray-400">Clique para ampliar</p>
      ) : null}
      {siteScreenshot ? (
        <Zoom canSwipeToUnzoom zoomMargin={20}>
          <Image
            width={600}
            height={600}
            alt="Website Preview"
            src={siteScreenshot}
            className="w-full h-auto rounded"
          />
        </Zoom>
      ) : null}
    </div>
  );
}
