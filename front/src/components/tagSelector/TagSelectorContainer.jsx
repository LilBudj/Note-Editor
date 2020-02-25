import React from "react";
import TagSelector from "./TagSelector";
import {useDispatch, useSelector} from "react-redux";
import {sortByTagsAC} from "../../redux/appReducer";

const TagSelectorContainer = () => {
    const dispatch = useDispatch();

    const sortByTags = (tag) => {
        dispatch(sortByTagsAC(tag))
    };

    return <TagSelector sort={sortByTags}/>
};

export default TagSelectorContainer