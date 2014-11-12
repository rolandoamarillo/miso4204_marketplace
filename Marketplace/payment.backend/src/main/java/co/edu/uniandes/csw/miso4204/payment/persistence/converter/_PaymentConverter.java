/* ========================================================================
 * Copyright 2014 miso4204
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 miso4204

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.qualifier

*/

package co.edu.uniandes.csw.miso4204.payment.persistence.converter;

import java.util.ArrayList;
import java.util.List;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.logging.Level;
import java.util.logging.Logger;


import co.edu.uniandes.csw.miso4204.payment.logic.dto.PaymentDTO;
import co.edu.uniandes.csw.miso4204.payment.persistence.entity.PaymentEntity;

public abstract class _PaymentConverter {

	public static PaymentDTO entity2PersistenceDTO(PaymentEntity entity){
		if (entity != null) {
			PaymentDTO dto = new PaymentDTO();
					dto.setValue(entity.getValue());
					dto.setTokenBank(entity.getTokenBank());
					dto.setId(entity.getId());
					dto.setName(entity.getName());
					dto.setCreditcardId(entity.getCreditcardId());
					dto.setPaymentmodeId(entity.getPaymentmodeId());
			return dto;
		}else{
			return null;
		}
	}
	
	public static PaymentEntity persistenceDTO2Entity(PaymentDTO dto){
		if(dto!=null){
			PaymentEntity entity=new PaymentEntity();
					entity.setValue(dto.getValue());
			
					entity.setTokenBank(dto.getTokenBank());
			
					entity.setId(dto.getId());
			
					entity.setName(dto.getName());
			
					entity.setCreditcardId(dto.getCreditcardId());
			
					entity.setPaymentmodeId(dto.getPaymentmodeId());
			
			return entity;
		}else {
			return null;
		}
	}
	
	public static List<PaymentDTO> entity2PersistenceDTOList(List<PaymentEntity> entities){
		List<PaymentDTO> dtos=new ArrayList<PaymentDTO>();
		for(PaymentEntity entity:entities){
			dtos.add(entity2PersistenceDTO(entity));
		}
		return dtos;
	}
	
	public static List<PaymentEntity> persistenceDTO2EntityList(List<PaymentDTO> dtos){
		List<PaymentEntity> entities=new ArrayList<PaymentEntity>();
		for(PaymentDTO dto:dtos){
			entities.add(persistenceDTO2Entity(dto));
		}
		return entities;
	}
}