const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    // if its a folder
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    // depth first search
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  }
  return { insertNode };
};
export default useTraverseTree;
