import { DataFilter } from './data-filter.model';

export class QueryString {
  year?: string;
  selectedColumns = '';
  sortDirection = 'Asc';
  sortBy = '';
  searchString = '';
  pageNumber = 0;
  pageSize = 10;
  filter: DataFilter[] = [];
}
