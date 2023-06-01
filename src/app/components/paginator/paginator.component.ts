import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() totalPages: number = 1
  @Input() currentPage: number = 1
  @Output() pageSelected: EventEmitter<number> = new EventEmitter()

  pages: number[] = []

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pages = []
    for (let i = 0; i < this.totalPages; i++) {
      this.pages.push(i + 1)
    }
  }

  setPage(page: number) {
    this.currentPage = page - 1
    this.pageSelected.emit(this.currentPage)
  }

  back() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1
      this.pageSelected.emit(this.currentPage)
    }
  }

  forward() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage = this.currentPage + 1
      this.pageSelected.emit(this.currentPage)
    }
  }

}
