import { Autocomplete, TextField, Box } from "@mui/material"
import { Category } from "./TableProducts"

type props = {
    selectedCategory: Category | null;
    setSelectedCategory: (category: Category | null)=> void;
    categories: Category[]
}

export const FilterByCategory = ({selectedCategory, setSelectedCategory, categories}: props) => {
    
    return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: "center", gap: 3 }}>
        <Autocomplete
        id="categories"
        options={categories?.sort((a: Category, b: Category) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(category: Category) => category.firstLetter}
        getOptionLabel={(category) => category.category}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Categories" />}
        value={selectedCategory}
        onChange={(_event, newCategory: Category | null) => {
            setSelectedCategory(newCategory)
        }}
        />       
    </Box>
    );
}