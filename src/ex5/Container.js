import { Search } from "./Search";

export const Container = () => {
    const onSearchTerm = (searchTerm) => {
        console.log(searchTerm);
    }

    return (
    <div>
        Witam
        <Search onSearchTerm={onSearchTerm} />
        </div>
    );

};