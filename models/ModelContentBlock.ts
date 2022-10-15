interface ModelContentBlock {
  id: string;
  keyword: string;

  delete(): void;
  duplicate(): void;
}

export default ModelContentBlock;
