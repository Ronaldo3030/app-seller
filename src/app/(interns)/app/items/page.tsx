'use client'

import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CardItem from "../_components/CardItem";
import FormItem from "./_components/FormItem";

export default function Page() {

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Items</h2>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Item</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <FormItem />
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
            </div>
            <div>
                <FormItem />
            </div>
        </>
    );
}