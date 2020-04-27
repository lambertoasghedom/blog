import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    // use gray-matter to parse the post meta section
    const matterResult = matter(fileContents)
    // combine the data with the id 

    return {
      id,
      ...matterResult.data
    }
  });
  // sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return 2
    }
  })
};

export function getAllPostIds() {
  const filesNames = fs.readdirSync(postDirectory)
  console.log(`here are the ids ${filesNames}`)
  return filesNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getPostData(id) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(fileContents)

  return {
    id, 
    ...matterResult.data
  }
}
