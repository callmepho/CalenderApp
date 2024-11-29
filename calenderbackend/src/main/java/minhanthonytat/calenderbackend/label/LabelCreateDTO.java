package minhanthonytat.calenderbackend.label;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

public class LabelCreateDTO {
  @Getter
	@Setter
  @NotBlank
  private String name;
}
