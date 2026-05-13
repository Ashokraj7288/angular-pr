export interface User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    zip: string;
    image_path?: string;
}

export interface Addition {
    id: number;
    addition_name: string;
    amount_type: string;
    amount: number;
    effective_date_from: string;
    effective_end_date: string;
    transaction_type: string;
}

  
  