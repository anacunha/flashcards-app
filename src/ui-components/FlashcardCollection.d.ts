/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlashcardProps } from "./Flashcard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type FlashcardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FlashcardProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function FlashcardCollection(props: FlashcardCollectionProps): React.ReactElement;
