import {useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const StudentsTable = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Status Bar");

    const options = [
        { name: "Ascending", enabled: false},
        { name: "Descending", enabled: false },
    ];



    return (
        <div className="mt-8">
            <div className="w-65/100">
                <h2 className="text-4xl mb-4">Most Viewed Pages</h2>
                <div className="mt-8 mb-10 space-x-3">
                    <input type={"text"} className="bg-gray-100 rounded-2xl text-sm w-60 py-[7px] pl-4 pr-4 focus:border-teal-500 focus:ring-teal-500" placeholder="Search"  />
                </div>
            </div>

                <table className="w-4/9 border-none">
                <thead>
                <tr className="bg-teal-300">
                    <th className="rounded-l-2xl w-23 text-center py-2 font-normal text-xl w-10">No.</th>
                    <th className="py-2 text-start font-normal text-xl pl-6  w-80">Pages</th>
                    <th className="p-2 w-40 font-normal text-lg rounded-r-2xl">
                        Views
                    </th>
                </tr>
                </thead>
                    <tbody>
                    <tr className="border-b-2 border-teal-500">
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-5 ml-8 flex items-center text-xl">
                            Knowledge Sharing
                        </td>
                        <td className="text-center border-teal-500 border-l-2 text-xl">10 K</td>
                    </tr>
                    <tr className="border-b-2 border-teal-500">
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-5 ml-8 flex items-center text-xl">
                            Knowledge Sharing
                        </td>
                        <td className="text-center border-teal-500 border-l-2 text-xl">10 K</td>
                    </tr>
                    <tr className="border-b-2 border-teal-500">
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-5 ml-8 flex items-center text-xl">
                            Knowledge Sharing
                        </td>
                        <td className="text-center border-teal-500 border-l-2 text-xl">10 K</td>
                    </tr>
                    <tr className="border-b-2 border-teal-500">
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-5 ml-8 flex items-center text-xl">
                            Knowledge Sharing
                        </td>
                        <td className="text-center border-teal-500 border-l-2 text-xl">10 K</td>
                    </tr>

                    </tbody>
                </table>
        </div>
    );
}
