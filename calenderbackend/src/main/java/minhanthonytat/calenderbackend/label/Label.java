package minhanthonytat.calenderbackend.label;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "label")
public class Label {
  @Getter
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

  @Column
	@Getter
	@Setter
  private String name;

  public Label(){};

  public Label(String name){
    this.name = name;
  }
}
