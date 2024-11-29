package minhanthonytat.calenderbackend.event;

import java.util.Date;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

public class EventCreateDTO {
  @Getter
	@Setter
  @NotBlank
  private String name;

	@Getter
	@Setter
  @NotNull
  private Date startDate;

	@Getter
	@Setter
  @NotNull
  private Date endDate;

	@Getter
	@Setter
  @NotBlank
  private String location;

	@Getter
	@Setter
  @NotNull
  private Long labelId;
}
