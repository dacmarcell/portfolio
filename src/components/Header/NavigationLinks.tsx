import Link from "next/link";
import json from "../../../public/mocks/navigation.json";

export default function NavigationLinks() {
  return json.navigation.map((item) => {
    return (
      <li key={item.id}>
        <Link href={item.endpoint} className="hover:text-green-800 text-white">
          {item.formattedName}
        </Link>
      </li>
    );
  });
}
