import fs from "fs";
import path from "patch";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map( fileName => {

        // Remove ".md" from file name to get id.
    })
}