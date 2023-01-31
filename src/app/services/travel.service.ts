import { Injectable } from "@angular/core";
import { Travel } from "../models/travel.model";


@Injectable(
    {providedIn: 'root'}
)
export class TravelService {
    travels: Travel[] = [
        {
            id: 1,
            country: 'Japon',
            city: 'Tokyo',
            sentence: 'Découvrez la capitale de l\'est',
            images: [
                'https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
                'https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1525230071276-4a87f42f469e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1583930263826-a1c6a639eaf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            ],
            counter: 0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            +'Curabitur laoreet enim ut ipsum ultricies lobortis. Aenean vulputate sit amet diam a semper.'
            +'Integer maximus diam non nisi imperdiet aliquam. Pellentesque dictum eleifend lectus, a auctor'
            +'elit accumsan eu. Nullam consectetur molestie odio, nec pretium sem pharetra ac. Maecenas egestas' 
            +'quam in nunc commodo, eu tempus velit ullamcorper. Quisque ligula massa, luctus non augue in, dictum' 
            +'lobortis justo. Nulla scelerisque sit amet erat ac posuere.',
            like: 0,
            price: 3000
        },

        {
            id: 2,
            country: 'Ukraine',
            city: 'Kiev',
            sentence: 'Le berceau du monde slave',
            images: [
                'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                'https://images.unsplash.com/photo-1561629625-edea42c6da34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                'https://images.unsplash.com/photo-1543298782-32907da49e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                'https://images.unsplash.com/photo-1563454463104-89c42715af01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

            ],
            counter: 0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            +'Curabitur laoreet enim ut ipsum ultricies lobortis. Aenean vulputate sit amet diam a semper.'
            +'Integer maximus diam non nisi imperdiet aliquam. Pellentesque dictum eleifend lectus, a auctor'
            +'elit accumsan eu. Nullam consectetur molestie odio, nec pretium sem pharetra ac. Maecenas egestas' 
            +'quam in nunc commodo, eu tempus velit ullamcorper. Quisque ligula massa, luctus non augue in, dictum' 
            +'lobortis justo. Nulla scelerisque sit amet erat ac posuere.',
            like: 0,
            price: 3000
        },

        {
            id: 3,
            country: 'Chine',
            city: 'Xian',
            sentence: 'L\'ancienne capitale impériale',
            images: [
                'https://images.unsplash.com/photo-1591709976757-94efbfd3b01e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1295&q=80',
                'https://images.unsplash.com/photo-1593407174638-896dde4034b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                'https://images.unsplash.com/photo-1602086232476-ff8c246b3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                'https://images.unsplash.com/photo-1547253836-a00cbde8a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            ],
            counter: 0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            +'Curabitur laoreet enim ut ipsum ultricies lobortis. Aenean vulputate sit amet diam a semper.'
            +'Integer maximus diam non nisi imperdiet aliquam. Pellentesque dictum eleifend lectus, a auctor'
            +'elit accumsan eu. Nullam consectetur molestie odio, nec pretium sem pharetra ac. Maecenas egestas' 
            +'quam in nunc commodo, eu tempus velit ullamcorper. Quisque ligula massa, luctus non augue in, dictum' 
            +'lobortis justo. Nulla scelerisque sit amet erat ac posuere.',
            like: 0,
            price: 2500
        }
    ];

    getTravelsList(): Travel[]{
        return this.travels;
    }

    getTravelById(travelId: number): Travel {
        const travel = this.travels.find( travelInArray => travelInArray.id === travelId);
        if(!travel){
            throw new Error ('Le voyage n\'existe pas');
        } else {
            return travel;
        }
    }

    recommandTravelById(travelId: number, recommandType: 'recommande' | 'non-recommande'): void {
        const travel = this.getTravelById(travelId);
        recommandType === 'recommande' ? travel.like++ : travel.like--;

    }
}