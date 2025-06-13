export default function BrotherSearchBox() {
  return (
    <div className="border mt-4 p-6 bg-white">
      <div className="text-lg font-semibold mb-2">Search by Model Name</div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ex: HL-3170CDW, MFC-J4710DW"
          className="border px-3 py-2 w-[300px]"
        />
        <button className="bg-[#1d7ddf] text-white px-4 py-1 rounded">Search</button>
      </div>
      <div className="text-blue-600 mt-2 text-sm cursor-pointer underline">
        ❓ How to identify your model name
      </div>
    </div>
  );
}
