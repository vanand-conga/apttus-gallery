import { EventEmitter } from '@angular/core';
export declare class NgxGalleryBulletsComponent {
    count: number;
    active: number;
    onChange: EventEmitter<any>;
    getBullets(): number[];
    handleChange(event: Event, index: number): void;
}
