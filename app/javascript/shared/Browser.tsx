import React from "react";
import { Input } from "antd";

interface BrowserProps {
  url: string;
}

const Browser = ({ url }: BrowserProps): JSX.Element => {
  return (
    <div
      className="flex flex-col drop-shadow-lg bg-slate-50 border border-slate-600 rounded"
      style={{ height: "19.4rem" }}
    >
      <div className="flex justify-between p-2 border border-b-slate-300 items-center">
        <div className="flex justify-between w-11 items-center">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="grow pl-3">
          <Input placeholder="http://" value={url} />
        </div>
        <div>{/* Intentionally blank */}</div>
      </div>
      <div>
        <iframe className="w-full h-64" src={url}></iframe>
      </div>
    </div>
  );
};

export default Browser;
