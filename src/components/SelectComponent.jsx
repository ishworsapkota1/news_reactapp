import { Select } from "antd";

// Filter option.label match the user type input

const SelectComponent = ({ options, navigate, setNews }) => (
  <Select
    showSearch
    className="h-[40px] min-w-36"
    placeholder="Filter by categories..."
    optionFilterProp="children"
    // onChange={onChange}
    onChange={
      (a, b) => navigate(`/news/category/${a}/${b.label}`)
      // setNews([])
    }
    filterOption={(input, option) =>
      (option?.label ?? "").toLowerCase().includes(input)
    }
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? "")
        .toLowerCase()
        .localeCompare((optionB?.label ?? "").toLowerCase())
    }
    options={options}
  />
);
export default SelectComponent;
