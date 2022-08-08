import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (val: string) => void;
}

const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  return (
    <Input
      prefix={<SearchOutlined />}
      placeholder="Please input keyword..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBar;
