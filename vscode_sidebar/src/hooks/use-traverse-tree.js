const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    // if its a folder
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: isFolder,
        items: [],
      });
    }
  }
  return { insertNode };
};
export default useTraverseTree;
