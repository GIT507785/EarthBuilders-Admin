import { ChevronDown } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const ShowRows = ({ value, onChange }: Props) => {
  const options = [
    "Active Only",
    "All Rows",
    "Non-Zero Rows",
  ];

  return (
    <div>
      <label className="block mt-1 text-sm font-medium text-gray-700">
        Show Rows
      </label>

      <div className="relative mt-2">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 
          bg-white px-4 appearance-none  py-3 pr-10 outline-none focus:border-emerald-600"
        >
          {options.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default ShowRows;