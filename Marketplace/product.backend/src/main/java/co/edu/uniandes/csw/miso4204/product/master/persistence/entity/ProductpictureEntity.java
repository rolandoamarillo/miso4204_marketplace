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

package co.edu.uniandes.csw.miso4204.product.master.persistence.entity;

import co.edu.uniandes.csw.miso4204.picture.persistence.entity.PictureEntity;
import co.edu.uniandes.csw.miso4204.product.persistence.entity.ProductEntity;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.PrimaryKeyJoinColumn; 
import org.eclipse.persistence.annotations.JoinFetch;

@Entity
@IdClass(ProductpictureEntityId.class)
@NamedQueries({
    @NamedQuery(name = "ProductpictureEntity.getByMasterId", query = "SELECT  u FROM ProductpictureEntity u WHERE u.productId=:productId"),
    @NamedQuery(name = "ProductpictureEntity.deleteProductpictureEntity", query = "DELETE FROM ProductpictureEntity u WHERE u.productId=:productId and  u.pictureId=:pictureId")
})
public class ProductpictureEntity implements Serializable {

    @Id
    @Column(name = "productId")
    private Long productId;
    @Id
    @Column(name = "pictureId")
    private Long pictureId;
    @ManyToOne
    @PrimaryKeyJoinColumn(name = "productId", referencedColumnName = "id")
    @JoinFetch
    private PictureEntity productIdEntity;
    @ManyToOne
    @PrimaryKeyJoinColumn(name = "pictureId", referencedColumnName = "id")
    @JoinFetch
    private PictureEntity pictureIdEntity; 

    public ProductpictureEntity() {
    }

    public ProductpictureEntity(Long productId, Long pictureId) {
        this.productId =productId;
        this.pictureId = pictureId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getPictureId() {
        return pictureId;
    }

    public void setPictureId(Long pictureId) {
        this.pictureId = pictureId;
    }

    public PictureEntity getProductIdEntity() {
        return productIdEntity;
    }

    public void setProductIdEntity(PictureEntity productIdEntity) {
        this.productIdEntity = productIdEntity;
    }

    public PictureEntity getPictureIdEntity() {
        return pictureIdEntity;
    }

    public void setPictureIdEntity(PictureEntity pictureIdEntity) {
        this.pictureIdEntity = pictureIdEntity;
    }

}