import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('rift.clb')
    .items([
      S.listItem()
        .title('Projects')
        .icon(() => '◐')
        .child(
          S.documentTypeList('project')
            .title('All projects')
            .defaultOrdering([{field: 'year', direction: 'desc'}]),
        ),
    ])
