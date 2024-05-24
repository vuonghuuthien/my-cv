import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  posCard_list = ['vt__card__left', 'vt__card__center', 'vt__card__right'];
  showImg_list = ['vt__hide', ''];
  sampleImg_list = [
    '/assets/images/CheckIllustrationIcon.svg',
    '/assets/images/StoreIllustrationIcon.svg',
    '/assets/images/ArchiveIllustrationIcon.svg',
    '/assets/images/ServiceImage.svg',
  ];
  posImg_list = [
    'vt__card-img__top',
    'vt__card-img__right',
    'vt__card-img__bottom',
    'vt__card-img__left',
  ];
  styleImg_list = [
    'vt__card-img__fit',
    'vt__card-img__fill',
    'vt__card-img__full',
    'vt__card-img__over',
  ];
  showDesc_list = ['vt__hide', ''];
  showList_list = ['vt__hide', ''];
  showBtn_list = [
    'vt__hide',
    'vt__card-content-action__link',
    'vt__card-content-action__btn',
    'vt__card-content-action__icon',
  ];

  @Input() posCard: string = this.posCard_list[0];
  @Input() showImg: string = this.showImg_list[0];
  @Input() sampleImg: string = this.sampleImg_list[0];
  @Input() posImg: string = this.posImg_list[0];
  @Input() styleImg: string = this.styleImg_list[0];
  @Input() showDesc: string = this.showDesc_list[0];
  @Input() showList: string = this.showList_list[0];
  @Input() showBtn: string = this.showBtn_list[0];
}
