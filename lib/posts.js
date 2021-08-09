/* eslint-disable no-use-before-define */
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

export function getPageData(pageId) {
  const pageMetadata = getPageMetadata(pageId);
  const pageContent = getPageArticle(pageId);
  return { pageContent, pageMetadata };
}

export function getPageMetadata(pageId, metadataFile = 'index.md') {
  const fullPath = glob.sync(
    `${process.cwd()}/data/**/${pageId}/${metadataFile}`,
  );

  const matterResult = matter.read(...fullPath);
  return matterResult.data;
}

function getSections(fileName) {
  // Remove the md extension in the file name
  const id = fileName.replace(/\.md$/, '').split('/').slice(-1);
  const matterResult = matter.read(fileName);
  const contentHTML = mdToHTML(matterResult.content);
  return {
    id,
    metadata: matterResult.data,
    contentHTML,
  };
}

export function getPageArticle(pageId, metadataFile = 'index.md') {
  const isFile = (fileName) => fs.lstatSync(fileName).isFile();
  const isNotMetadataFile = (fileName) => !fileName.includes(metadataFile);
  const fullPath = glob.sync(`${process.cwd()}/data/**/${pageId}`);

  // Get only md files that are not the metadata file ( not index.md)
  const sections = fs
    .readdirSync(...fullPath)
    .map((fileName) => path.join(...fullPath, fileName))
    .filter(isFile)
    .filter(isNotMetadataFile)
    .map((fileName) => getSections(fileName));

  // Convert array of section into object of sections
  return { ...sections };
}

export function getAllPagePaths(pattern, topParent = 'data') {
  // The pattern must be something like data/articles/**/*.md */
  // return every folder name containing the '*.md' file
  return glob.sync(process.cwd() + pattern).map((foldersPath) => {
    const pathSplitted = foldersPath.split('/');
    const topParentIndex = pathSplitted.indexOf(topParent);
    const fullPath = pathSplitted.slice(topParentIndex + 1, -1);
    return {
      params: { id: fullPath },
    };
  });
}

export function getAllPageIds(pattern) {
  // The pattern must be something like data/articles/**/*.md
  // return every folder name containing the '*.md' file
  return glob.sync(process.cwd() + pattern).map((foldersPath) => {
    const articlePath = foldersPath.split('/').slice(-2, -1);
    return {
      params: { id: articlePath },
    };
  });
}

export function getAllArticlesIds() {
  const pattern = `/data/articles/**/index.md`;
  const topParent = 'articles';
  return {
    ids: getAllPageIds(pattern),
    fullPath: getAllPagePaths(pattern, topParent),
  };
}

export function getHomePageData() {
  return getPageData('home_page');
}

export function getAllArticlesMetadata() {
  const pattern = `/data/articles/**/index.md`;

  return getAllPageIds(pattern)
    .map((thePath) => {
      return {
        id: thePath.params.id,
        data: getPageMetadata(`${thePath.params.id}`),
      };
    })
    .sort((a, b) => {
      if (a.data.date < b.data.date) {
        return -1;
      }
      if (a.data.date > b.data.date) {
        return 1;
      }
      return 0;
    });
}

export function mdToHTML(mdText) {
  return remark().use(html).processSync(mdText).toString();
}
