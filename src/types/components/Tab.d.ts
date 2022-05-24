declare interface ITab {
  name: string,
  comp: any,
};

declare type Comp = Pick<ITab, 'comp'>