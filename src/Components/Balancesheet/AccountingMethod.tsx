interface Props {
  value: "Cash" | "Accrual";
  onChange: (value: "Cash" | "Accrual") => void;
}

const AccountingMethod = ({ value, onChange }: Props) => {
  return (
    <div>
      <label className="block mt-2 text-sm font-medium text-gray-700">
        Accounting Method
      </label>

      <div className="flex gap-6  mt-2 border p-3 rounded-md border-gray-300">

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={value === "Cash"}
            onChange={() => onChange("Cash")}
          />
          Cash
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={value === "Accrual"}
            onChange={() => onChange("Accrual")}
          />
          Accrual
        </label>

      </div>
    </div>
  );
};

export default AccountingMethod;